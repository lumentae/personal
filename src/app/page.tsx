import { List } from "@/components/List";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">
        I like building things - games, websites, tools, or hardware. Whether it’s a multiplayer Roblox game or a custom mechanical keyboard, I enjoy making stuff that actually works and feels nice to use.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Things I Like Doing</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Creating Roblox games</li>
        <li>Coding websites in React and TypeScript</li>
        <li>Making hardware projects like a DIY steering wheel</li>
        <li>Reverse engineering and low-level programming</li>
        <li>Designing and building tools for myself and others</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Tools I Use</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>React + Next.js + TypeScript</li>
        <li>Tailwind CSS for fast UI styling</li>
        <li>C#, C++, Python (depending on the project)</li>
        <li>Raspberry Pi, microcontrollers, and sensors</li>
        <li>vJoy, Blender, Git, and random dev tools</li>
      </ul>
      <List>
        <Logo name="React"></Logo>
        <Logo name="C#" file="CS"></Logo>
        <Logo name="C++"></Logo>
        <Logo name="Arduino"></Logo>
        <Logo name="Blender"></Logo>
      </List>

      <p className="text-md mt-6 text-gray-600 italic">
        This site is just one of many small experiments with more to come!.
      </p>
    </div>
  );
}