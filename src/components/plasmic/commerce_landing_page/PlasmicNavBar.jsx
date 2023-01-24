// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3MeN9jw5ag7idoatJ62R6w
// Component: mj_O5lbqHvwG7X
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 6liFua4rlEpKyn/component
import TextInput from "../../TextInput"; // plasmic-import: 7Lc_EtX3oq7k19/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: 3MeN9jw5ag7idoatJ62R6w/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: mj_O5lbqHvwG7X/css
import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: pUT_AuoZxj0tD1/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: Ai3-42nSn9C4fZ/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: lZp7I9uocbC0Mu/icon
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: oEXPWp5m5mIFom/icon

export const PlasmicNavBar__VariantProps = new Array("filled", "searchOpen");

export const PlasmicNavBar__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicNavBar__RenderFunc(props) {
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
        path: "filled",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.filled : undefined
      },
      {
        path: "searchOpen",
        type: "private",
        variableType: "variant",
        initFunc: true ? ($props, $state, $ctx) => $props.searchOpen : undefined
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootsearchOpen]: hasVariant($state, "searchOpen", "searchOpen") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___7IVd6, {
          [sty.freeBoxfilled___7IVd6QHsb]: hasVariant(
            $state,
            "filled",
            "filled"
          ),

          [sty.freeBoxsearchOpen___7IVd6SoiQb]: hasVariant(
            $state,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <Button
          data-plasmic-name={"homeButton"}
          data-plasmic-override={overrides.homeButton}
          link={`/`}
          showStartIcon={true}
          startIcon={
            <HomeIcon
              className={classNames(projectcss.all, sty.svg__idNku)}
              role={"img"}
            />
          }
        >
          {"Home"}
        </Button>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__uwmjI, {
            [sty.freeBoxsearchOpen__uwmjIsoiQb]: hasVariant(
              $state,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          {(hasVariant($state, "searchOpen", "searchOpen") ? false : true) ? (
            <Button
              data-plasmic-name={"searchButton"}
              data-plasmic-override={overrides.searchButton}
              className={classNames("__wab_instance", {
                [sty.searchButtonsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              iconOnly={true}
              startIcon={
                <SearchIcon
                  className={classNames(projectcss.all, sty.svg__uZlY1)}
                  role={"img"}
                />
              }
            >
              {"Menu"}
            </Button>
          ) : null}
          {(hasVariant($state, "searchOpen", "searchOpen") ? true : true) ? (
            <TextInput
              data-plasmic-name={"searchInput"}
              data-plasmic-override={overrides.searchInput}
              className={classNames("__wab_instance", sty.searchInput, {
                [sty.searchInputsearchOpen]: hasVariant(
                  $state,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              placeholder={"Search..."}
            />
          ) : null}

          <Button
            data-plasmic-name={"profileButton"}
            data-plasmic-override={overrides.profileButton}
            iconOnly={true}
            startIcon={
              <ProfileIcon
                className={classNames(projectcss.all, sty.svg___9Cx6G)}
                role={"img"}
              />
            }
          >
            {"Menu"}
          </Button>

          <div className={classNames(projectcss.all, sty.freeBox__gazUv)}>
            <Button
              data-plasmic-name={"cartButton"}
              data-plasmic-override={overrides.cartButton}
              colors={"white"}
              rounded={true}
              showStartIcon={true}
              startIcon={
                <CartIcon
                  className={classNames(projectcss.all, sty.svg__hCwqF)}
                  role={"img"}
                />
              }
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text,
                  { [sty.textfilled]: hasVariant($state, "filled", "filled") }
                )}
              >
                {hasVariant($state, "filled", "filled") ? "1" : "0"}
              </div>
            </Button>
          </div>
        </p.Stack>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "homeButton",
    "searchButton",
    "searchInput",
    "profileButton",
    "cartButton",
    "text"
  ],

  homeButton: ["homeButton"],
  searchButton: ["searchButton"],
  searchInput: ["searchInput"],
  profileButton: ["profileButton"],
  cartButton: ["cartButton", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavBar__ArgProps,
          internalVariantPropNames: PlasmicNavBar__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeButton: makeNodeComponent("homeButton"),
    searchButton: makeNodeComponent("searchButton"),
    searchInput: makeNodeComponent("searchInput"),
    profileButton: makeNodeComponent("profileButton"),
    cartButton: makeNodeComponent("cartButton"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */