import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';

function SvgSettingsIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" className="" {...props}>
      <G fillRule="nonzero" fill="currentColor">
        <Path d="M.064 2.196L1.661 4.99a.399.399 0 00.25.189L3.4 5.55l5.108 5.109.565-.564-5.189-5.189a.398.398 0 00-.185-.105l-1.431-.359-1.36-2.38L2.074.898l2.38 1.36.36 1.431c.017.07.054.135.105.186l5.189 5.189.564-.565L5.563 3.39l-.372-1.488a.4.4 0 00-.19-.25L2.209.055a.4.4 0 00-.48.065L.133 1.716a.4.4 0 00-.068.48zM16.658 7.866l-8.78 8.78-.565-.564 8.78-8.78zM6.34 16.957a.399.399 0 00-.342-.193H3.604c-.14 0-.27.073-.342.193l-1.198 1.996a.4.4 0 000 .41l1.198 1.996a.4.4 0 00.342.194h2.394a.4.4 0 00.342-.194l1.198-1.995a.4.4 0 000-.411L6.34 16.957zm-.568 3.798H3.83l-.957-1.597.957-1.596h1.943l.958 1.596-.958 1.597z" />
        <Path d="M19.169 9.58a4.773 4.773 0 004.643-5.947.4.4 0 00-.67-.186L20.658 5.93l-1.971-.657-.658-1.971L20.514.817a.4.4 0 00-.187-.67 4.775 4.775 0 00-5.85 5.578l-8.741 8.74a4.708 4.708 0 00-.935-.096 4.79 4.79 0 104.79 4.79 4.697 4.697 0 00-.098-.936l2.093-2.092.915.915a.4.4 0 00.564 0l.2-.2a.447.447 0 01.634.632l-.001.001-.2.2a.4.4 0 000 .564l4.761 4.761a3.221 3.221 0 104.576-4.535l-.02-.02-4.761-4.761a.4.4 0 00-.564 0l-.2.2a.447.447 0 11-.634-.632v-.002l.2-.2a.4.4 0 000-.564l-.915-.915 2.093-2.092c.308.063.62.096.935.097zm1.568 13.57c-.29-.001-.577-.053-.849-.155l3.117-3.118a2.42 2.42 0 01-2.268 3.273zm-4.521-10.374a1.246 1.246 0 001.756 1.754l4.479 4.483c.048.049.094.1.138.152l-3.413 3.413a2.324 2.324 0 01-.152-.138l-4.483-4.483a1.246 1.246 0 00-1.756-1.754l-.638-.638 3.43-3.426.639.637zm1.611-4.014l-9.054 9.052a.4.4 0 00-.105.38 4.018 4.018 0 11-2.902-2.903.403.403 0 00.379-.105l9.052-9.052c.099-.1.139-.244.105-.38A3.972 3.972 0 0119.396.806L17.29 2.912a.399.399 0 00-.096.408l.798 2.395a.4.4 0 00.253.252l2.394.798a.4.4 0 00.409-.096l2.105-2.105a3.971 3.971 0 01-4.949 4.094.4.4 0 00-.379.104h.002z" />
        <Path d="M20.649 20.073l-.564.565-3.992-3.991.565-.565z" />
      </G>
    </Svg>
  );
}

export default SvgSettingsIcon;