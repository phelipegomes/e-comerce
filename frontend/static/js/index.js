const app = angular.module('App' ["ngRout"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/pagina1", {
            templateUrl: "views/p1.html"
        })
        .when("/pagina2", {
            templateUrl: "views/p2.html"
        })
        .when("/pagina3", {
            templateUrl: "views/p3.html"
        })

    .otherwise({ redirectTo: '/' })

})

// Roteamento de historico
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// Definicao de caminhos
const router = async() => {
    const routes = [{
        path: "/",
        view: Inicio
    }, {
        path: "/soft-skills",
        view: SoftSkills
    }, {
        path: "/hard-skills",
        view: HardSkills
    }, {
        path: "/curriculum",
        view: Curriculum
    }, {
        path: "/portifolio",
        view: Portifolio
    }, {
        path: "/contato",
        view: Contato
    }];

    // Teste de rota para correspondencia potencial
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
};

// Evento de next e back para inclusao no historico
window.addEventListener("popstate", router);

// Definicao de evento no link de dados
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();

});

function test() {
    return console.log("alouuuuuuuuuuu");
}