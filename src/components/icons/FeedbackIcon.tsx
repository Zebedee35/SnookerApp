import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

function SvgFeedbackIcon(props: SvgProps) {
  return (
    <Svg width={24} height={17} xmlns="http://www.w3.org/2000/svg" className="" {...props}>
      <G fillRule="nonzero" fill="none">
        <Path
          d="M16.427 11.415H6.833V.905h16.739V13.88l-3.687-2.464h-3.458zm-4.869-2.607c2.386-.967 3.192-2.708 2.939-4.013-.177-.875-.798-1.442-1.604-1.442-.445 0-.936.184-1.412.53-.483-.362-.966-.545-1.42-.545-.805 0-1.426.567-1.595 1.457-.253 1.32.56 3.069 2.938 4.013a.2.2 0 00.154 0z"
          fill="#00EFD1"
        />
        <Path fill="#00ACEA" d="M16.427 11.415v2.708H3.867L.429 16.588V3.615H6.833v7.8z" />
        <Path
          d="M14.497 4.795c.253 1.305-.553 3.046-2.939 4.013a.2.2 0 01-.154 0c-2.378-.944-3.191-2.693-2.938-4.013.169-.89.79-1.457 1.596-1.457.453 0 .936.183 1.42.544.475-.345.966-.53 1.411-.53.806 0 1.427.568 1.604 1.443z"
          fill="#D7443E"
        />
        <Path
          d="M11.259 9.175a.59.59 0 00.448-.001c2.589-1.049 3.461-2.993 3.178-4.454l-.001-.003c-.216-1.069-.997-1.76-1.99-1.76-.456 0-.938.154-1.41.447-.476-.306-.954-.461-1.422-.461-1 0-1.78.698-1.984 1.778-.283 1.476.59 3.426 3.18 4.454zM8.854 4.869c.133-.701.596-1.136 1.208-1.136.365 0 .775.16 1.183.466a.395.395 0 00.469.003c.408-.297.816-.454 1.18-.454.609 0 1.075.43 1.215 1.124.219 1.13-.511 2.656-2.629 3.54-2.117-.866-2.846-2.398-2.626-3.543z"
          fill="#083863"
        />
        <Path
          d="M23.572.5H6.832a.42.42 0 00-.412.406v2.31H.428a.384.384 0 00-.379.399v12.973a.388.388 0 00.611.324l3.335-2.387h12.432a.416.416 0 00.413-.402V11.81h2.926l3.586 2.398a.395.395 0 00.22.067.387.387 0 00.379-.395V.906c0-.218-.16-.406-.38-.406zm-7.523 13.235H3.868a.368.368 0 00-.222.07L.84 15.82V4.006h5.58v7.409a.41.41 0 00.413.394h9.216v1.926zm7.111-.595l-3.063-2.054a.37.37 0 00-.212-.067H7.21V1.29h15.95v11.85z"
          fill="#083863"
        />
        <Path
          d="M16.252 4.154h3.128a.395.395 0 100-.79h-3.128a.395.395 0 100 .79zM16.252 8.796h5.406a.395.395 0 000-.79h-5.406a.395.395 0 000 .79zM16.252 6.327h5.406a.395.395 0 100-.79h-5.406a.395.395 0 100 .79z"
          fill="#083863"
        />
      </G>
    </Svg>
  );
}

export default SvgFeedbackIcon;
