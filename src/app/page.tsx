import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../components/hero"
import Cards from "../../components/cards";
import Background from "./background";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <>    
       <Hero></Hero>   
       <Background></Background>  
       <Banner></Banner> 
       <Cards></Cards>

    </>
  );
}
