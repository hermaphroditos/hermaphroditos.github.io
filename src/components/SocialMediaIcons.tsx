const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="linkedin-link" src="assets/images/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="twitter-link" src="../assets/images/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="facebook-link" src="assets/images/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="instagram-link" src="./assets/images/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;