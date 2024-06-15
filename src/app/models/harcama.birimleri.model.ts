import { SirketModel } from "./sirket.model";

export class HarcamaBirimleriModel{
    id : string = "";
    birimAdi : string = "";
    birimKodu : string = "";
    birimYetkili : string = "";
    birimYetkiliTelefon : string ="";
    sirket : SirketModel = new SirketModel();
}