// @ts-ignore
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Router from "next/router";
import { Center, Text } from "@chakra-ui/react";
import withAuth from "components/withAuth";

const private_project = () => {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser == null) {
      Router.push("/");
    }
  });

  if (!currentUser) {
    return null;
  }

  return (
    <div>
      <Center>
        <Text color='orange' fontSize='xl' fontWeight='normal'>
          Dashboard Page
        </Text>
      </Center>
    </div>
  )
}

export default function DashboardProtected() {
    return withAuth(private_project);
}