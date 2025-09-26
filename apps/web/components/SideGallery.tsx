"use client";
import "./SideGallery.css";
import Link from "next/link";
import { link } from "fs";
import { useRef } from "react";


export function SideGallery() {

    const btnRef = useRef<HTMLButtonElement>(null);
    
    return(

        
        
 <section className="pagedImages" style={{alignContent: "center", justifyContent: "center", alignItems: "center", width: "100%"}}>
      <input id="page1" accessKey="1" type="radio" name="pagedImages1" title="Images page 1" checked={true} />
      <input id="page2" accessKey="2" type="radio" name="pagedImages1" title="Images page 2" />
      <input id="page3" accessKey="3" type="radio" name="pagedImages1" title="Images page 3" />
      <label htmlFor="page1" title="To page 1">1</label>
      <label htmlFor="page2" title="To page 2">2</label>
      <label htmlFor="page3" title="To page 3">3</label>
      <ul title="This is page 1">
        <li id="image1">
          <a href="#image1"><img alt="" src="http://placekitten.com/400/400" /></a>
          <article>
            <h3>Image 1</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
        <li id="image2" >
            
            <Link href="courses/compsciClass">
                <button
                    type="button"
                    ref={btnRef}
                    id="btnID"
                    style={{
                    fontSize: "30px",
                    textAlign: "center",
                    justifyContent: "center",
                    position: "relative",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#815656",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    width: "20vh",
                    height: "20vh",
                    }}
                >
                    compsci
                </button>
            </Link>
          <article>
            <h3>Image 2</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
          <aside>
            <p>You can have more than one element here and it doesn't need to be article.</p>
          </aside>
        </li>
        <li id="image3">
          <a href="#image3"><img alt="" src="http://placekitten.com/400/300" /></a>
          <article>
            <h3>Image 3</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
        <li id="image4">
          <a href="#image4"><img alt="" src="http://placekitten.com/250/400" /></a>
          <article>
            <h3>Image 4</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
      </ul>
      <ul title="This is page 2">
        <li id="image5">
          <a href="#image5"><img alt="" src="http://placekitten.com/400/250" /></a>
          <article>
            <h3>Image 5</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
        <li id="image6">
          <a href="#image6"><img alt="" src="http://placekitten.com/400/200" /></a>
          <article>
            <h3>Image 6</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
        <li id="image7">
          <a href="#image7"><img alt="" src="http://placekitten.com/200/400" /></a>
          <article>
            <h3>Image 7</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
        <li id="image8">
          <a href="#image8"><img alt="" src="http://placekitten.com/275/400" /></a>
          <article>
            <h3>Image 8</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
      </ul>
      <ul title="This is page 3">
        <li id="image9">
          <a href="#image9"><img alt="" src="http://placekitten.com/400/275" /></a>
          <article>
            <h3>Image 9</h3>
            <p>Have here whatever you like.</p>
            <p><a href="#">Close</a></p>
          </article>
        </li>
        <li id="image10">
          <a href="#image10"><img alt="" src="http://placekitten.com/350/400" /></a>
          <article>
            <h3>Image 10</h3>
            <p><a href="#">Close</a></p>
          </article>
        </li>
      </ul>
    </section>
    );
}