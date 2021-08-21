"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const listings_1 = require("./listings");
const app = express_1.default();
const port = 9000;
app.use(body_parser_1.default.json());
app.get("/listings", (_req, res) => {
    res.send(listings_1.listings);
});
app.post("/delete-listing", (req, res) => {
    const id = req.body.id;
    for (let i = 0; i < listings_1.listings.length; i++) {
        if (listings_1.listings[i].id === id) {
            return res.send(listings_1.listings.splice(i, 1)[0]);
        }
    }
    return res.send("failed to deleted listing");
});
app.listen(port);
console.log(`[app] : http://localhost:${port}`);
