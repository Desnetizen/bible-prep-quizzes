import LottieView from 'lottie-react-native';

const preparationLogoAnimation = require('../../assets/animations/preparation-logo.json');

export function PreparationLogoAnimation({
  autoPlay = true,
  loop = false,
  speed = 1,
  style,
  onAnimationFinish,
}) {
  return (
    <LottieView
      autoPlay={autoPlay}
      loop={loop}
      onAnimationFinish={onAnimationFinish}
      resizeMode="contain"
      source={preparationLogoAnimation}
      speed={speed}
      style={style}
    />
  );
}
