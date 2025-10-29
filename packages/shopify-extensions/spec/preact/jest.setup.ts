import { setAct } from "@gadgetinc/core/testing";
import "@testing-library/jest-dom";
import { act } from "preact/test-utils";

setAct(act as any);
