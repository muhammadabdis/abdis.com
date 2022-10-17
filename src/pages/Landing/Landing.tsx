import { LinkButton } from "../../components/base";

import Hero from "./Hero";
import RecentPosts from "./RecentPosts";

export function Landing() {
  return (
    <>
      <Hero
        title="Selamat Datang"
        description={
          <>
            Disini Saya menulis perjalanan Saya selama berkarir di dunia
            pengembangan software. <strong>Enjoy!</strong>
          </>
        }
        callToAction={<LinkButton href="/about">Tentang Saya</LinkButton>}
      />

      <RecentPosts posts={[]} />
    </>
  );
}
