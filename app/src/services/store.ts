import { defineStore } from "pinia";

export interface State {
  console: string;
  number: string;
  decimals: string;
  operator: string;
  operations: string;
  history: History[];
  idx: number;
  dark: boolean;
  sound: boolean;
  color: string;
  heart: string;
  message: string;
  cursor: number;
}

export interface History {
  operations: string;
  number: string;
}

const useStore = defineStore("main", {
  state: (): State => {
    return {
      console: "0",
      number: "0",
      decimals: "",
      operator: "",
      operations: "",
      history: [],
      idx: 0,
      dark: true,
      sound: true,
      color: "blue-500",
      heart: "💙",
      message: "👋 Welcome to CALCULATOR 3000",
      cursor: 0,
    };
  },
  actions: {
    updateConsole(): void {
      const nf = Intl.NumberFormat();
      this.console =
        nf.format(Number(this.number)).replaceAll(",", " ") + this.decimals;
    },
    addOperator(op: string): void {
      const rest = ["+", "-"];
      if (
        op === "-" &&
        !rest.includes(this.operator) &&
        !this.operator.includes("-")
      )
        this.operator = this.operator + " -";
      else this.operator = op;
    },
    addOperation(op: string): void {
      if (!this.operations) this.operations = op;
      else this.operations += " " + op;
    },
    addHistory(): void {
      const hist: History = {
        operations: this.operations,
        number: this.number,
      };
      this.history.unshift(hist);
    },
    switchDark(): void {
      this.dark = !this.dark;
    },
    switchSound(): void {
      this.sound = !this.sound;
    },
    changeColor(color: string): void {
      this.color = color;
    },
    changeHeart(heart: string): void {
      this.heart = heart;
    },
  },
});

export default useStore;
