import { RainbowButton } from "../rainbow-button";

const Props = {
  text?: string;
  className?: string;
}

const SecondaryButton = () => {
  return (
    <RainbowButton>
      <div className="flex cursor-pointer text-sm">
        <span>Download CV</span>
      </div>
    </RainbowButton>
  );
};

export default SecondaryButton;
