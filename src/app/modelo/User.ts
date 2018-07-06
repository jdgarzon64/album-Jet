import { Sticker } from './Sticker';
import { STICKERS } from './../../environments/mocks/mock-stickers';
export class User {
    public userId: string;
    public profilePicture: string;
    public name: string;
    public lastName: string;
    public user: string;
    public password: string;
    public stickersList: Sticker[] = STICKERS;
}

