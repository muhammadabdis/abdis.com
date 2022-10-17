import { Github, Linkedin, Twitter, Youtube } from "../icons";

interface SocialMediaItemProps {
  url: string;
  children: React.ReactNode;
}

function SocialMediaItem({ children, url }: SocialMediaItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="w-[38px] h-[38px] inline-flex items-center justify-center border rounded-full border-[#AAAAAA] hover:border-black hover:bg-black hover:text-[#FBF2ED]"
    >
      {children}
    </a>
  );
}

function SocialMediaList() {
  const socials = [
    {
      url: "https://github.com/muhammadabdis",
      icon: <Github />,
    },
    {
      url: "https://www.linkedin.com/in/muhammad-abdis/",
      icon: <Linkedin />,
    },
    {
      url: "https://twitter.com/abdissalim",
      icon: <Twitter />,
    },
    {
      url: "https://www.youtube.com/channel/UCIAaOJdq-2GTnSzuz1_awwA",
      icon: <Youtube />,
    },
  ];

  return (
    <div className="text-center mb-6">
      <ul className="inline-grid grid-cols-4 gap-x-4">
        {socials.map((social) => {
          return (
            <li key={social.url}>
              <SocialMediaItem url={social.url}>{social.icon}</SocialMediaItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-6 py-8 mt-auto">
      <SocialMediaList />

      <p className="text-center">© 2022 Muhammad Abdis</p>
    </footer>
  );
}
