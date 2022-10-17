import { Link } from "../../components/base";
import { FaceSmile, ArrowRight } from "../../components/icons";

function EmptyPosts() {
  return (
    <div className="max-w-[285px] mx-auto my-auto">
      <div className="text-center">
        <FaceSmile className="text-7xl" color="#D1CECE" />
      </div>

      <p className="text-[#AAAAAA] text-lg font-bold text-center mt-3.5">
        Belum ada postingan.
      </p>
    </div>
  );
}

interface Post {
  title: string;
  body: string;
  updatedAt: Date;
}

interface Props {
  posts: Post[];
}

export default function RecentPosts({ posts }: Props) {
  return (
    <div className="flex-1 flex flex-col px-6 pt-6">
      <div className="mb-4">
        <h4 className="font-extrabold text-lg">Blog Terbaru</h4>

        <Link href="/">
          Lihat semuas
          <span className="ml-2">
            <ArrowRight />
          </span>
        </Link>
      </div>

      <div className="flex-1 flex min-h-[400px]">
        {!posts.length && <EmptyPosts />}
      </div>
    </div>
  );
}
