describe('Sikertelen versenyzők számának számítása', () => {
    it('Versenyzők:100, Célbaértek:10 ',()=>{
        let act = getUnsuccessCount(100,10);
        expect(act).toBe(90);
    });
    it('Versenyzők:200, Célbaértek:10 ',()=>{
        let act = getUnsuccessCount(200,10);
        expect(act).toBe(190);
    });
    it('Versenyzők:500, Célbaértek:50 ',()=>{
        let act = getUnsuccessCount(500,50);
        expect(act).toBe(450);
    });
});

describe('Sikertelen versenyzők százalékának számítása', () => {
    it('Versenyzők:100, Célbaértek:10 ',()=>{
        let act = getUnsuccessPercent(100,10);
        expect(act).toBe(10);
    });
    it('Versenyzők:200, Célbaértek:10 ',()=>{
        let act = getUnsuccessPercent(200,10);
        expect(act).toBe(5);
    });
    it('Versenyzők:500, Célbaértek:50 ',()=>{
        let act = getUnsuccessPercent(500,50);
        expect(act).toBe(10);
    });
});