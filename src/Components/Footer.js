import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/Ravenslayer998/calculator",
  },

  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/thooi998/",
  },
];

const Footer = () => {
  return (
    <footer className="Footer">
      <Box
        position="bottom"
        top={0}
        left={0}
        right={0}
        translateY={0}
        backgroundColor="#18181b"
      >
        <Box color="white" maxWidth="auto" margin="auto">
          <HStack
            px={16}
            py={5}
            justifyContent="flex-start"
            alignItems="center"
          >
            <button className="button icon">
              <HStack spacing={20}>
                {socials.map(({ icon, url }) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      size="3x"
                      key={url}
                      color="white"
                    />
                  </a>
                ))}
              </HStack>
            </button>
            <Box>
              <HStack>
                <div className="Copyright">
                  <p>Copyright @ {getCurrentYear()}</p>
                </div>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
