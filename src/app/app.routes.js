import { homePageComponent } from "./pathPages/HomePageComponents/home-people.component";
import { homePageComponent1 } from "./pathPages/HomePageComponents/home-planets.component";
import { peoplePageComponent } from "./pathPages/people-page.component";
import { planetsPageComponent } from "./pathPages/planets-page.component";
import { starshipsPageComponent } from "./pathPages/starships-page.component";
import { notFound } from "./common/not-found.component";

export const appRoutes = [
    { path: '', component: homePageComponent },
    { path: '', component: homePageComponent1 },
    { path: 'people', component: peoplePageComponent },
    { path: 'planets', component: planetsPageComponent },
    { path: 'starships', component: starshipsPageComponent },
    { path: '**', component: notFound}
]