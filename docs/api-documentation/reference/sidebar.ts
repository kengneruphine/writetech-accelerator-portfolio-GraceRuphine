import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-documentation/reference/chimoney-api",
    },
    {
      type: "category",
      label: "Beneficiaries",
      items: [
        {
          type: "doc",
          id: "api-documentation/reference/get-all-beneficiaries-for-an-account",
          label: "Get all beneficiaries for an account",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-documentation/reference/create-a-new-bank-beneficiary",
          label: "Create a new bank beneficiary",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
