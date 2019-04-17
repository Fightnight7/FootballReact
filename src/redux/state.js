import rerenderEntireTree from "../render";

let state = {
    TeamsData: [
            {name : "ars"},
            {name : "bournemouth"},
            {name : "bur"},
            {name : "brighton"},
            {name : "cardiff2"},
            {name : "che"},
            {name : "cpfc"},
            {name : "everton"},
            {name : "fulham2"},
            {name : "hudd"},
            {name : "lcfc"},
            {name : "liv"},
            {name : "mcfc"},
            {name : "mu"},
            {name : "ncu"},
            {name : "saints"},
            {name : "tot"},
            {name : "watford"},
            {name : "whufc"},
            {name : "wolves2"}
        ],

    LeagueTableData: [
        {pos: 1, team: "Ливерпуль", games: 33, points: 82},
        {pos: 2, team: "Манчестер Сити", games: 32, points: 80},
        {pos: 3, team: "Челси", games: 33, points: 66},
        {pos: 4, team: "Тоттенхэм", games: 32, points: 64},
        {pos: 5, team: "Арсенал", games: 32, points: 63},
        {pos: 6, team: "Манчестер Юнайтед", games: 32, points: 61},
        {pos: 7, team: "Лестер", games: 33, points: 47},
        {pos: 8, team: "Вулверхэмптон", games: 32, points: 47},
        {pos: 9, team: "Эвертон", games: 33, points: 46},
        {pos: 10, team: "Уотфорд", games: 32, points: 46},
        {pos: 11, team: "Вест Хэм", games: 33, points: 42},
        {pos: 12, team: "Кристал Пэлас", games: 33, points: 39},
        {pos: 13, team: "Борнмут", games: 33, points: 38},
        {pos: 14, team: "Бернли", games: 33, points: 36},
        {pos: 15, team: "Ньюкасл", games: 33, points: 35},
        {pos: 16, team: "Брайтон", games: 31, points: 33},
        {pos: 17, team: "Саутгемптон", games: 32, points: 33},
        {pos: 18, team: "Кардифф", games: 32, points: 28},
        {pos: 19, team: "Фулхэм", games: 33, points: 17},
        {pos: 20, team: "Хаддерсфилд", games: 33, points: 14}
    ],

    Comments: {
        AllComments: [
            {id:1, user:"Max", text:"ManUnited"},
            {id:2, user:"Bogdan", text:"Levlpool"},
            {id:3, user:"Roma", text:"Arsenal"}
        ],

        TextareaComment: ""
    },

    NewsSearch: "",

};

export let giveTextarea = (comment) => {
    state.Comments.TextareaComment = comment;
    rerenderEntireTree(state);
};

export let newsSearch = (search) => {
    state.NewsSearch = search;
    rerenderEntireTree(state);
};

export let CommentRow = (comment) => {
    let newComment = {
        id: 4,
        text: comment,
        user: "Max"
    };
    state.Comments.AllComments.push(newComment);
    rerenderEntireTree(state);
};






export default state;

