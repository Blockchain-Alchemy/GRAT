// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n22P5UCTG6TSvQEwcAgng5
// Component: nbIni8d0jvuI
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 7D7rbF4eiHT/component
import { useScreenVariants as useScreenVariantsusHrCz8Uspksb } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: USHrCz8USPKSB/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_grat_v_3.module.css"; // plasmic-import: n22P5UCTG6TSvQEwcAgng5/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: nbIni8d0jvuI/css
import AndroidBrainSvgrepoComsvgIcon from "./icons/PlasmicIcon__AndroidBrainSvgrepoComsvg"; // plasmic-import: kkjSx718Dk/icon
import ChemistryTubesSvgrepoComsvgIcon from "./icons/PlasmicIcon__ChemistryTubesSvgrepoComsvg"; // plasmic-import: GTwiR8sw2c/icon
import StrategySvgrepoComsvgIcon from "./icons/PlasmicIcon__StrategySvgrepoComsvg"; // plasmic-import: 7tpAvFgbHj/icon
import BasicConnectionUi2SvgrepoComsvgIcon from "./icons/PlasmicIcon__BasicConnectionUi2SvgrepoComsvg"; // plasmic-import: mDTfVwCOLI/icon
import BasicDownloadUiSvgrepoComsvgIcon from "./icons/PlasmicIcon__BasicDownloadUiSvgrepoComsvg"; // plasmic-import: 6aMNcomd6D/icon
import BasicUiUploadSvgrepoComsvgIcon from "./icons/PlasmicIcon__BasicUiUploadSvgrepoComsvg"; // plasmic-import: ut0gqxxX82/icon
import ArrowBasicUiSvgrepoComsvgIcon from "./icons/PlasmicIcon__ArrowBasicUiSvgrepoComsvg"; // plasmic-import: J9a5-XTry0/icon

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsusHrCz8Uspksb()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <p.Stack
            as={"div"}
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            hasGap={true}
            className={classNames(projectcss.all, sty.header)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__s5Osx)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__dtAoC)}
                displayHeight={"75px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "https://img.plasmic.app/img-optimizer/v1/img/f2dce8552be7de98ecbad9714a165f6a.png",
                  fullWidth: 413,
                  fullHeight: 130
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fVfPn
                )}
              >
                <React.Fragment>
                  <React.Fragment>{"By "}</React.Fragment>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__maDpI
                    )}
                    href={"BlockAlc.com"}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ textDecorationLine: "underline" }}
                      >
                        {"Blockchain Alchemy"}
                      </span>
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </a>
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
            </p.Stack>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ynqSh
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly") ? (
                <React.Fragment>
                  <React.Fragment>
                    {"GRAT is a fully featured IDE that lets you make "}
                  </React.Fragment>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__kqUmV
                    )}
                    href={"Tezos.com"}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Tezos"
                      : "Tezos"}
                  </a>
                  <React.Fragment>
                    {" Smart Contracts using visual blocks. \n\n"}
                  </React.Fragment>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <React.Fragment>
                    {"GRAT is a fully featured IDE where you make "}
                  </React.Fragment>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__kqUmV
                    )}
                    href={"Tezos.com"}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Tezos"
                      : "Tezos"}
                  </a>
                  <React.Fragment>
                    {" Smart Contracts using visual blocks. "}
                  </React.Fragment>
                </React.Fragment>
              )}
            </div>

            <Button
              className={classNames("__wab_instance", sty.button___78V4)}
              color={"blue"}
              shape={"rounded"}
              showStartIcon={true}
              startIcon={
                <AndroidBrainSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg___97BdI)}
                  role={"img"}
                />
              }
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : hasVariant(globalVariants, "screen", "smaller")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xtY9Z
                  )}
                >
                  {"Tutorial"}
                </div>
              ) : null}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__q2Kcx)}
              color={"blue"}
              shape={"rounded"}
              showStartIcon={true}
              startIcon={
                <ChemistryTubesSvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__heeDn)}
                  role={"img"}
                />
              }
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : hasVariant(globalVariants, "screen", "smaller")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bJ1Gg
                  )}
                >
                  {"Ideas"}
                </div>
              ) : null}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__v7Y75)}
              color={"blue"}
              shape={"rounded"}
              showStartIcon={true}
              startIcon={
                <StrategySvgrepoComsvgIcon
                  className={classNames(projectcss.all, sty.svg__yaQwh)}
                  role={"img"}
                />
              }
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : hasVariant(globalVariants, "screen", "smaller")
                  ? true
                  : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__z5A2X
                  )}
                >
                  {"About GRAT"}
                </div>
              ) : null}
            </Button>
          </p.Stack>

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tminn
              )}
            >
              {"GRAT Works Best on\n Tablets and Desktops"}
            </div>
          ) : null}

          <div
            data-plasmic-name={"body"}
            data-plasmic-override={overrides.body}
            className={classNames(projectcss.all, sty.body)}
          >
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.freeBox___1Erg4)}>
                <div
                  data-plasmic-name={"blocks"}
                  data-plasmic-override={overrides.blocks}
                  className={classNames(projectcss.all, sty.blocks)}
                >
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__oj1Ft)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"228px"}
                      loading={"lazy"}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/9ff99ad587c7df06c151d733314401b7.png",
                        fullWidth: 368,
                        fullHeight: 1320
                      }}
                    />
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__nxJai)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"748px"}
                      loading={"lazy"}
                      src={{
                        src: "https://img.plasmic.app/img-optimizer/v1/img/849f94b8f811ec99e105b1bf3d23b18e.png",
                        fullWidth: 2172,
                        fullHeight: 1232
                      }}
                    />
                  ) : null}
                </div>

                <div
                  data-plasmic-name={"contractControls2"}
                  data-plasmic-override={overrides.contractControls2}
                  className={classNames(projectcss.all, sty.contractControls2)}
                >
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ljolf
                      )}
                    >
                      {"Contract Control Panel "}
                    </div>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"contractButtons"}
                      data-plasmic-override={overrides.contractButtons}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.contractButtons
                      )}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__nktXn
                        )}
                        color={"blue"}
                        shape={"rounded"}
                        showStartIcon={true}
                        size={"compact"}
                        startIcon={
                          <BasicConnectionUi2SvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__cnRye
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Convert"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__l0Zf5
                        )}
                        color={"blue"}
                        shape={"rounded"}
                        showStartIcon={true}
                        size={"compact"}
                        startIcon={
                          <BasicDownloadUiSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__d9Yp
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Save"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__msAvo
                        )}
                        color={"blue"}
                        shape={"rounded"}
                        showStartIcon={true}
                        size={"compact"}
                        startIcon={
                          <BasicUiUploadSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__feVbi
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Compile"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__w2QW
                        )}
                        color={"green"}
                        shape={"rounded"}
                        showStartIcon={true}
                        size={"compact"}
                        startIcon={
                          <ArrowBasicUiSvgrepoComsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__owbgf
                            )}
                            role={"img"}
                          />
                        }
                      >
                        {"Deploy"}
                      </Button>
                    </p.Stack>
                  ) : null}
                </div>
              </div>
            ) : null}

            <div
              data-plasmic-name={"interactiveElements"}
              data-plasmic-override={overrides.interactiveElements}
              className={classNames(projectcss.all, sty.interactiveElements)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__ichD)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "https://img.plasmic.app/img-optimizer/v1/img/434dfac994a0d91c253c7d1c93cf5530.png",
                  fullWidth: 412,
                  fullHeight: 360
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__mHwrO)}
                displayHeight={"585px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "https://img.plasmic.app/img-optimizer/v1/img/84eeabcdd76f0e6525a321ae45c84d2f.png",
                  fullWidth: 746,
                  fullHeight: 654
                }}
              />
            </div>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "body",
    "blocks",
    "contractControls2",
    "contractButtons",
    "interactiveElements"
  ],

  header: ["header"],
  body: [
    "body",
    "blocks",
    "contractControls2",
    "contractButtons",
    "interactiveElements"
  ],

  blocks: ["blocks"],
  contractControls2: ["contractControls2", "contractButtons"],
  contractButtons: ["contractButtons"],
  interactiveElements: ["interactiveElements"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    body: makeNodeComponent("body"),
    blocks: makeNodeComponent("blocks"),
    contractControls2: makeNodeComponent("contractControls2"),
    contractButtons: makeNodeComponent("contractButtons"),
    interactiveElements: makeNodeComponent("interactiveElements"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */