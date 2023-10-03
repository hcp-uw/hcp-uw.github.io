import {
    Center,
    Image,
    Link,
    Text,
    VStack,
    HStack,
    Spacer,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faInstagram,
    faFacebookSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

interface IIcon {
    key: string;
    link: string;
    icon: IconDefinition;
}

export default function Footer() {
    const icons: IIcon[] = [
        {
            key: "instagram",
            link: "https://instagram.com/huskycodingproject?igshid=YmMyMTA2M2Y=",
            icon: faInstagram,
        },
        {
            key: "linkedin",
            link: "https://www.linkedin.com/company/husky-coding-project/",
            icon: faLinkedin,
        },
        {
            key: "facebook",
            link: "https://www.facebook.com/profile.php?id=100087380841446",
            icon: faFacebookSquare,
        },
        {
            key: "email",
            link: "mailto:hcpuw@uw.edu",
            icon: faEnvelope,
        },
    ];

    return (
        <Center height='300px'>
            <VStack justifyContent="center">
                <Link href="/">
                    <Image
                        width="200px"
                        src="/HCPLogoText-Crop.webp"
                        alt="HCP Logo"
                    />
                </Link>
                <Spacer />
                <Spacer />
                <HStack spacing={4}>
                    {icons.map((icon) => (
                        <Link key={icon.key} href={icon.link}>
                            <FontAwesomeIcon
                                size="2x"
                                color="white"
                                icon={icon.icon}
                            />
                        </Link>
                    ))}
                </HStack>
                <Spacer />
                <Spacer />
                <Spacer />
                <Text fontSize='xs' color='white' textAlign="center">
                    Copyright © 2023 Husky Coding Project. All Rights Reserved
                </Text>
            </VStack>
        </Center>
    );
}
