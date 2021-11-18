import axios from "axios";
import { reportTypes } from "./types";
import config from "../../../../config";

const { auth_api } = config;

const {REPORT_SUCCESSFUL,REPORT_ERROR}=reportTypes;