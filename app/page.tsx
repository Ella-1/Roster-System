// import { Button, HStack } from "@chakra-ui/react"
// import Sidebar from "./sidebar/sidebar";

import RosterPage from "./(dashboard)/roster/page";
import PlannerPage from "./component/Planner";

// import Navbar from "./component/NavBar";

export default function Home() {
  return (
   <>
   <PlannerPage />
   <RosterPage />
   {/* <Navbar /> */}
   {/* <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack> */}
    {/* <Sidebar /> */}
   </>
  );
}
