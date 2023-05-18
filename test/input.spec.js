describe('Bemenet ellenőrzése', () => {
    it('50 bevitele', () => {
        let act = checkInput(50);
        expect(act).toBe(true);
    });
});