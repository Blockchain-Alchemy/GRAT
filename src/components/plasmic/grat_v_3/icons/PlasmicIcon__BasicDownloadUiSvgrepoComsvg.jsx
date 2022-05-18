// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BasicDownloadUiSvgrepoComsvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M360.76 118.53H319.9c-8.84 0-16 7.16-16 16s7.16 16 16 16h40.86c25.49 0 46.22 20.74 46.22 46.22v209.52c0 25.49-20.74 46.22-46.22 46.22H151.24c-25.49 0-46.22-20.74-46.22-46.22V196.75c0-25.49 20.74-46.22 46.22-46.22h40.86c8.84 0 16-7.16 16-16s-7.16-16-16-16h-40.86c-43.13 0-78.22 35.09-78.22 78.22v209.52c0 43.13 35.09 78.22 78.22 78.22h209.52c43.13 0 78.22-35.09 78.22-78.22V196.75c0-43.13-35.09-78.22-78.22-78.22z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M189.08 267.9c-6.25-6.25-16.38-6.25-22.63 0s-6.25 16.38 0 22.63l78.22 78.22c.38.38.77.73 1.18 1.07.17.14.35.26.52.39.24.18.48.37.74.54.22.15.44.27.66.4.23.14.45.28.68.4.23.12.47.23.7.34.24.11.47.23.72.33.23.1.46.17.7.26.26.09.51.19.78.27.24.07.47.12.71.18.27.07.53.14.81.2s.56.09.83.13c.24.03.47.08.71.1.52.05 1.05.08 1.58.08s1.05-.03 1.58-.08c.24-.02.48-.07.71-.1.28-.04.56-.07.83-.13.27-.05.54-.13.8-.2.24-.06.48-.11.71-.18.26-.08.52-.18.78-.27.23-.08.47-.16.7-.26.24-.1.48-.22.72-.33.23-.11.47-.21.7-.34.23-.12.45-.27.68-.4.22-.13.45-.26.67-.4.25-.17.49-.36.74-.54.17-.13.35-.25.52-.39.41-.34.81-.69 1.18-1.07l78.22-78.22c6.25-6.25 6.25-16.38 0-22.63s-16.38-6.25-22.63 0L272 318.82V43.5c0-8.84-7.16-16-16-16s-16 7.16-16 16v275.32l-50.92-50.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BasicDownloadUiSvgrepoComsvgIcon;
/* prettier-ignore-end */
