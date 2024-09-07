import Hero from "../../components/hero"
import Cards from "../../components/cards";
import Background from "./background";
import Banner from "../../components/Banner";
import {insertDummyData} from "../db/queries/Post/insert"


export default function Home() {
  insertDummyData();
  return (
    <>   
       <Hero></Hero>   
       <Background></Background>  
       <Banner></Banner> 
       <Cards></Cards>
    </>
  );
}
