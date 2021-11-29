import React, { Component } from "react";

const Games = (props) => {
  return (
    <div className="contentGames">
      {/* <h1>Games Page</h1> */}
      <section class="gameCards">
        <article class="gameCard">
          <picture class="gameThumbnail">
            <img
              class="gameCategory__01"
              src="https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg"
              alt="Catan"
            />
          </picture>
          <div class="gameCard-content">
            <p class="gameCategory gameCategory__01">Settlers of Catan</p>
            <p>
            Be the dominant force on the island of Catan
            by building settlements, cities, and roads.
            </p>
          </div>
        </article>
      </section>
      {/* end game 1 */}
      <section class="gameCards">
        <article class="gameCard">
          <picture class="gameThumbnail">
            <img
              class="gameCategory__02"
              src="https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__itemrep/img/wAMLbgihOl7dJDHnvqt7OXKEV-4=/fit-in/246x300/filters:strip_icc()/pic1534148.jpg"
              alt="Pandemic"
            />
          </picture>
          <div class="gameCard-content">
            <p class="gameCategory gameCategory__03">Pandemic</p>
            <p>
            Your team of experts must prevent the world from succumbing to a viral pandemic.
            </p>
          </div>
        </article>
      </section>
      {/* end game 2 */}
      <section class="gameCards">
        <article class="gameCard">
          <picture class="gameThumbnail">
            <img
              class="gameCategory__04"
              src="https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__itemrep/img/e8zw8YQvQB8q8zfWkHQ48Ls920g=/fit-in/246x300/filters:strip_icc()/pic2582929.jpg"
              alt="Pandemic"
            />
          </picture>
          <div class="gameCard-content">
            <p class="gameCategory gameCategory__03">Codenames</p>
            <p>
            Give your team clever one-word clues to help them spot their agents in the field.
            </p>
          </div>
        </article>
      </section>
      {/* end game 3 */}
    </div>

  );
};
export default Games;
