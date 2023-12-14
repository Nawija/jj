import React from 'react';

interface ShadowBgProps {
  z: number;
}

const ShadowBg: React.FC<ShadowBgProps> = ({ z }) => {
  return (
    <div
      className={`absolute left-0 top-0 z-[${z}] h-full w-full bg-black/60`}
    />
  );
};

export default ShadowBg;
