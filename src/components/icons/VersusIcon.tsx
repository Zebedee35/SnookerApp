import * as React from 'react';
import Svg, {SvgProps, G, Path, Ellipse} from 'react-native-svg';

function SvgVersusIcon(props: SvgProps) {
  return (
    <Svg width={48} height={38} xmlns="http://www.w3.org/2000/svg" className="" {...props}>
      <G fillRule="nonzero" fill="none">
        <G transform="translate(.844 4.688)">
          <G fill="#C4E04C">
            <Path d="M18.423 17.928c0-1.683.598-3.228 1.592-4.431a6.966 6.966 0 013.39-2.247L27.73.475h-6.535l-7.204 19.41L6.786.474H.094l11.14 27.755h5.355l2.749-6.848a6.938 6.938 0 01-.915-3.454z" />
            <Path d="M25.825 10.977a6.949 6.949 0 014.937 2.52 6.944 6.944 0 011.371 2.688c.782.25 1.621.48 2.511.707 4.606 1.181 5.551 1.968 5.551 3.504v.079c0 1.614-1.496 2.598-3.976 2.598-1.85 0-3.51-.448-5.067-1.233a6.951 6.951 0 01-5.68 3.053c3.121 2.365 6.89 3.534 10.629 3.534 5.944 0 10.117-3.07 10.117-8.543v-.079c0-4.802-3.15-6.81-8.74-8.267-4.763-1.22-5.944-1.81-5.944-3.622v-.079c0-1.338 1.22-2.401 3.543-2.401 2.323 0 4.724 1.023 7.165 2.716l3.15-4.567C42.597 1.341 39.172.082 35.156.082c-5.63 0-9.646 3.307-9.646 8.306 0 .882.075 1.739.315 2.59z" />
          </G>
          <Ellipse fill="#BB1919" cx={25.547} cy={17.941} rx={6.234} ry={6.047} />
        </G>
        <G fill="#000001">
          <Path d="M17.043 35.73h-.022a.937.937 0 100 1.876h.022a.938.938 0 000-1.875zM14.328 35.73H9.543a.938.938 0 000 1.875h4.785a.938.938 0 000-1.875zM36 1.957h.046a.938.938 0 000-1.875H36a.938.938 0 000 1.875zM38.68 2.127c1.882.244 3.687.753 5.364 1.515a.935.935 0 001.241-.466.937.937 0 00-.466-1.241A20.665 20.665 0 0038.92.267a.938.938 0 00-.24 1.86zM45.402 18.395c-1.482-1.281-3.593-2.23-6.847-3.078-4.81-1.232-5.24-1.697-5.24-2.713v-.08c0-.888 1.023-1.463 2.606-1.463 1.989 0 4.158.834 6.63 2.55a.938.938 0 001.307-.24l3.15-4.566a.937.937 0 00-.186-1.263C43.756 5.08 40.115 3.832 36 3.832c-2.585 0-4.845.653-6.607 1.807l.051-.127a.938.938 0 00-.87-1.287H22.04a.938.938 0 00-.879.612l-6.325 17.04-6.326-17.04a.938.938 0 00-.88-.612H.938a.937.937 0 00-.87 1.287L11.21 33.267a.937.937 0 00.87.588h5.354a.937.937 0 00.87-.588l2.125-5.295a7.881 7.881 0 005.57 2.54c3.129 2.285 7.003 3.54 10.947 3.54 3.199 0 5.923-.84 7.879-2.43C46.902 29.935 48 27.497 48 24.573v-.08c0-2.592-.85-4.586-2.598-6.097zM16.799 31.98h-4.086L2.324 6.1h4.654l6.978 18.798a.937.937 0 001.758 0L22.69 6.1h4.497l-3.647 9.086a7.932 7.932 0 00-3.338 2.329.934.934 0 00-.125.151 7.864 7.864 0 00-1.748 4.95c0 1.258.297 2.447.822 3.504l-2.353 5.86zm17.324-9.792c.35.096.724.196 1.132.3 4.846 1.243 4.846 1.9 4.846 2.596v.078c0 1.541-2.326 1.66-3.038 1.66a9.929 9.929 0 01-3.74-.723 7.851 7.851 0 00.8-3.911zm-7.732 6.487c-3.444 0-6.235-2.707-6.235-6.046 0-3.34 2.791-6.047 6.235-6.047 3.443 0 6.234 2.707 6.234 6.047s-2.791 6.046-6.234 6.046zm19.734-4.103c0 4.69-3.518 7.605-9.18 7.605-2.862 0-5.68-.733-8.137-2.092a7.929 7.929 0 003.45-2.365l.024-.024a11.8 11.8 0 004.78 1.002c3.624 0 4.914-1.827 4.914-3.536v-.078c0-2.403-1.93-3.303-6.256-4.413a48.429 48.429 0 01-1.99-.547 7.897 7.897 0 00-1.345-2.46.985.985 0 00-.124-.149 7.9 7.9 0 00-4.83-2.71 9.513 9.513 0 01-.14-1.73c0-4.407 3.5-7.368 8.709-7.368 3.37 0 6.378.931 8.955 2.771l-2.117 3.07C40.35 9.96 38.08 9.186 35.92 9.186c-3.095 0-4.481 1.677-4.481 3.339v.078c0 2.702 2.28 3.411 6.646 4.53 2.918.76 4.853 1.612 6.09 2.68 1.33 1.15 1.949 2.637 1.949 4.68v.079z" />
        </G>
      </G>
    </Svg>
  );
}

export default SvgVersusIcon;
