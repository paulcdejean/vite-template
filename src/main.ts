import type { NS } from "@ns"
import Example from "./ui/Example"


export async function main(ns: NS): Promise<void> {
  ns.tprintRaw(React.createElement(Example))
}
