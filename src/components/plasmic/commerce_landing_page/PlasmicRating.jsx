// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3MeN9jw5ag7idoatJ62R6w
// Component: MaH2PuiUXFDjA1
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: 3MeN9jw5ag7idoatJ62R6w/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: MaH2PuiUXFDjA1/css
import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: fpo1wi3v4W4G7Z/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: I59znBL6Y3nGUO/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: A4ghiFNZY9RE1X/icon

export const PlasmicRating__VariantProps = new Array("rating");

export const PlasmicRating__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicRating__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.rating : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__pY3G, {
          [sty.svgrating_five__pY3GolB2Y]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__pY3GFef5R]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__pY3G1MVjm]: hasVariant($state, "rating", "four"),
          [sty.svgrating_half__pY3GwOiiU]: hasVariant($state, "rating", "half"),
          [sty.svgrating_oneHalf__pY3GEfP6A]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),

          [sty.svgrating_one__pY3GBZjmN]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf__pY3GVzj4X]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__pY3GLnXSf]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__pY3GNkc5]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),

          [sty.svgrating_two__pY3GmrAPt]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__fuUe, {
          [sty.svgrating_five__fuUEolB2Y]: hasVariant($state, "rating", "five"),
          [sty.svgrating_fourHalf__fuUeFef5R]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__fuUe1MVjm]: hasVariant($state, "rating", "four"),
          [sty.svgrating_oneHalf__fuUeEfP6A]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),

          [sty.svgrating_threeHalf__fuUevzj4X]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__fuUeLnXSf]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__fuUeNkc5]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),

          [sty.svgrating_two__fuUEmrAPt]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__a2S1H, {
          [sty.svgrating_five__a2S1HolB2Y]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__a2S1HFef5R]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__a2S1H1MVjm]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_threeHalf__a2S1Hvzj4X]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),

          [sty.svgrating_three__a2S1HLnXSf]: hasVariant(
            $state,
            "rating",
            "three"
          ),

          [sty.svgrating_twoHalf__a2S1HNkc5]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__yY6Np, {
          [sty.svgrating_five__yY6NpolB2Y]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__yY6NpFef5R]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),

          [sty.svgrating_four__yY6Np1MVjm]: hasVariant(
            $state,
            "rating",
            "four"
          ),

          [sty.svgrating_threeHalf__yY6NpVzj4X]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <p.PlasmicIcon
        PlasmicIconType={
          hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__bt5Ex, {
          [sty.svgrating_five__bt5ExolB2Y]: hasVariant(
            $state,
            "rating",
            "five"
          ),

          [sty.svgrating_fourHalf__bt5ExFef5R]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */