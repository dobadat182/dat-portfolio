"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imageList: EmojiImage[] = [
  {
    id: 1,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Wry%20Smile.png",
    name: "Cat with Wry Smile",
  },
  {
    id: 2,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Cat%20with%20Tears%20of%20Joy.png",
    name: "Cat with Tears of Joy",
  },
  {
    id: 3,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Crying%20Cat.png",
    name: "Crying Cat",
  },
  {
    id: 4,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Ghost.png",
    name: "Ghost",
  },
  {
    id: 5,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Cat%20with%20Smiling%20Eyes.png",
    name: "Grinning Cat with Smiling Eyes",
  },
  {
    id: 6,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Cat.png",
    name: "Grinning Cat",
  },
  {
    id: 7,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Kissing%20Cat.png",
    name: "Kissing Cat",
  },
  {
    id: 8,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Pouting%20Cat.png",
    name: "Pouting Cat",
  },
  {
    id: 9,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Cat%20with%20Heart-Eyes.png",
    name: "Smiling Cat with Heart-Eyes",
  },
  {
    id: 10,
    src: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Weary%20Cat.png",
    name: "Weary Cat",
  },
];

const RandomAvatar = () => {
  const [randomImage, setRandomImage] = useState<EmojiImage | null>(null);

  useEffect(() => {
    const getRandomEmoji = (): void => {
      const randomIndex: number = Math.floor(Math.random() * imageList.length);
      setRandomImage(imageList[randomIndex]);
    };

    getRandomEmoji();
  }, []);

  if (!randomImage) return null;

  return (
    <Image
      src={randomImage.src}
      alt={randomImage.name}
      layout="fill"
      objectFit="contain"
      className="rounded-lg"
    />
  );
};

export default RandomAvatar;
