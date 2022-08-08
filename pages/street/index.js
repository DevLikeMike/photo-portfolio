import Layout from "@/components/Layout";
import ShowcaseItem from "@/components/ShowcaseItem";
import Image from "next/image";
/*
ShowcaseItem should direct you to collection of shots that are related to the item. The title should be relative to the shoot(i.e. "St. Augustine"). Child of ShowcaseItem is the small description. Image should showcase the best image of this collection.
*/

export default function index() {
  return (
    <>
      <Layout title='Photographer | Street Photography'>
        <div className='showcase_page street'>
          <h1>Street Photography Photos</h1>
          <ShowcaseItem
            title='St. Augustine'
            itemImage='/street/SAHallway.jpg'
            date='7-3-22'
          >
            Street Photography Session in St. Augustine, Florida.{" "}
          </ShowcaseItem>
          <ShowcaseItem
            title='Cummer Museum of Art'
            itemImage='/street/FramedFountain.jpg'
            reverse='true'
            date='7-21-22'
          >
            Photos of Cummer's Museum of Art in Jacksonville, Florida.{" "}
          </ShowcaseItem>
          <ShowcaseItem
            title='Jax Beach, Florida'
            itemImage='/street/Window.jpg'
            date='3-20-22'
          >
            Photos of Jax Beach, Florida{" "}
          </ShowcaseItem>
        </div>
      </Layout>
    </>
  );
}
