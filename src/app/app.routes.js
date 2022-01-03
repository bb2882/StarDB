import { homePageComponent } from "./pathPages/home-page.component";
import { peoplePageComponent } from "./pathPages/people-page.component";
import { planetsPageComponent } from "./pathPages/planets-page.component";
import { starshipsPageComponent } from "./pathPages/starships-page.component";
import { notFound } from "./common/not-found.component";

export const appRoutes = [
    { path: '', component: homePageComponent },
    { path: 'people', component: peoplePageComponent },
    { path: 'planets', component: planetsPageComponent },
    { path: 'starships', component: starshipsPageComponent },
    { path: '**', component: notFound}
]