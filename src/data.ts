import * as classifications from "./classifications.js";
import { Action, BuildAction, TransformAction } from "./types.js";

const units = Object.values(classifications).map(
  ({ id, name, weight, maxContentWeight, icon }) => ({
    id,
    name,
    weight: weight + maxContentWeight,
    icon,
  })
);

const actions = Object.values(classifications)
  .flatMap(({ id, actions }) =>
    actions.map((action, index) => ({
      ...action,
      id: `${id}-action-${index}`,
    }))
  )
  .filter(({ type }) => type === "build" || type === "transform");

const links = Object.values(classifications)
  .flatMap(({ id, operationRequirements, fuel, containers, actions }) => [
    ...operationRequirements.map((operationRequirement) => ({
      source: operationRequirement.id,
      target: id,
      name: "required to operate",
    })),
    ...(fuel
      ? [
          {
            source: fuel.id,
            target: id,
            name: "fuel for",
          },
        ]
      : []),
    // ...containers.flatMap((container) =>
    //   container.classifications.map((classification) => ({
    //     source: id,
    //     target: classification.id,
    //     name: "can carry",
    //   }))
    // ),
    ...actions
      .map((action, index) => ({ ...action, index }))
      .filter(({ type }) => type === "build" || type === "transform")
      .map(({ index }) => ({
        source: id,
        target: `${id}-action-${index}`,
        name: "has action",
      })),
    ...actions
      .map((action: Action, index: number) => ({ ...action, index }))
      .filter(({ type }) => type === "build" || type === "transform")
      .flatMap(
        ({
          consumes,
          index,
        }: (BuildAction | TransformAction) & { index: number }) =>
          [
            ...consumes
              .map(({ id }) => id)
              .reduce((set, id) => set.add(id), new Set()),
          ].map((c) => ({
            source: c,
            target: `${id}-action-${index}`,
            name: "consumed by",
          }))
      ),
    ...actions
      .map((action, index) => ({ ...action, index }))
      .filter(({ type }) => type === "build")
      .flatMap(({ result, index }: BuildAction & { index: number }) =>
        result.map((r) => ({
          source: `${id}-action-${index}`,
          target: r.id,
          name: "produces",
        }))
      ),
    ...actions
      .map((action, index) => ({ ...action, index }))
      .filter(({ type }) => type === "transform")
      .map(({ result, index }: TransformAction & { index: number }) => ({
        source: `${id}-action-${index}`,
        target: result.id,
        name: "transforms into",
      })),
  ])
  .filter(({ source }) => Boolean(source))
  .map((link) => ({
    ...link,
    id: `${link.source} ${link.name} ${link.target}`,
  }));

export { units, actions, links };
