const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ido-jeon-026b7a274/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="linkedin-link" src="assets/images/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="#home"
        rel="noopener noreferrer"
      >
        <img alt="twitter-link" src="../assets/images/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        rel="noopener noreferrer"
      >
        <img alt="instagram-link" src="./assets/images/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;