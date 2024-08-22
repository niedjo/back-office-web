"use client"
import Hero from '@/components/Hero';
import ToggleTheme from '@/components/Theme';

const Home = () => {

  return (
    <div className="w-full h-[100vh] flex flex-col items-center dark:bg-black-100 pt-2 pr-1">
      <ToggleTheme />
      <Hero />
    </div>
  );
}

export default Home
