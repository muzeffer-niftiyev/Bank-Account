import BankAccount from "./bank-account.js";

describe("Bank Account App", () => {
  let account;
  beforeEach(() => {
    account = new BankAccount("bob", 500);
  });

  describe("Deposit function: ", () => {
    test("should be defined", () => {
      expect(account.deposit).toBeDefined();
    });

    test("should add value to balance", () => {
      account.deposit(200);
      expect(account.getBalance()).toBe(700);

      account.deposit(1000);
      expect(account.getBalance()).toBe(1700);
    });

    test("should get argument typeof number", () => {
      expect(() => account.deposit("100")).toThrow();
      expect(() => account.deposit()).toThrow();
      expect(() => account.deposit(null)).toThrow();
    });

    test('should get only positive numbers', () => {
        expect(() => account.deposit(-100)).toThrow();
    })
  });

  describe("Withdraw function: ", () => {
    test("should be defined", () => {
      expect(account.withdraw).toBeDefined();
    });

    test("should withdraw value from balance", () => {
      account.withdraw(100);
      expect(account.getBalance()).toBe(400);

      account.withdraw(400);
      expect(account.getBalance()).toBe(0);
    });

    test("should get argument typeof number", () => {
      expect(() => account.withdraw("100")).toThrow();
      expect(() => account.withdraw()).toThrow();
      expect(() => account.withdraw(null)).toThrow();
    });

    test("should get only positive numbers", () => {
      expect(() => account.withdraw(-50)).toThrow();
    });

    test('withdraw value must be less than balance', () => {
        expect(() => account.withdraw(1000)).toThrow();
    })
  });

  describe("Get Balance function: ", () => {
    test("should be defined", () => {
      expect(account.getBalance).toBeDefined();
    });

    test("should return balance", () => {
      expect(account.getBalance()).toBe(500)
    });
  });
});
