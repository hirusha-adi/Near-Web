import { isUserLoggedIn, user } from "../../../lib/backend";
import { DrawerAndLayout } from "../components/DrawerAndLayout";
import { Card } from "./components/Cards/Card";
import { CardsLayout } from "./components/Cards/CardLayout";
import { BookOpenIcon, CogIcon, ChatBubbleOvalLeftIcon, MusicalNoteIcon, ChartPieIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <DrawerAndLayout>
      <CardsLayout >
        <Card icon={<BookOpenIcon />} number="0" description="Users" />
        <Card icon={<CogIcon />} number="0" description="Questions" />
        <Card icon={<CogIcon />} number="0" description="Questions" />

      </CardsLayout>
    </DrawerAndLayout>
  );
};

export { Home };
