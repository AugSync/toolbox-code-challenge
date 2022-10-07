import renderer from "react-test-renderer";
import { Table } from "../src/components";
import WrapperReduxTest from "./utils/WrapperReduxTest";

it("Test Table component", () => {
  const component = renderer.create(
    <WrapperReduxTest
      initialState={{
        tableData: [
          {
            name: "test2.csv",
            lines: [
              {
                file: "test2.csv",
                text: "tqKxqXUH",
                number: "680974973",
                hex: "5e9cf3e506b04f0f7f48085451446dce",
              },
            ],
          },
          {
            name: "test3.csv",
            lines: [
              {
                file: "test3.csv",
                text: "HebylCEvV",
                number: "48412389674640590714593150492362",
                hex: "747fe600c914195ba929e13a186bdb8c",
              },
              {
                file: "test3.csv",
                text: "BNMncTytoBhrokGimNYLj",
                number: "55557",
                hex: "c6f9121cb0f4f5b12d75d195775009c3",
              },
              {
                file: "test3.csv",
                text: "cxgcQptaopPzlXhfdfoYsXtjvHt",
                number: "23712",
                hex: "fb70c9c2f77f089d98ea96ac845865c3",
              },
            ],
          },
          {
            name: "test6.csv",
            lines: [
              {
                file: "test6.csv",
                text: "qQgxysMGOUS",
                number: "37354515",
                hex: "82a8617c78cb66e71195bd9e8cb48148",
              },
              {
                file: "test6.csv",
                text: "VXROxXvNHFHbzkvVCOyNRPlcwK",
                number: "998522",
                hex: "911ff44c23f2396fd4b9c51ec6ffdabf",
              },
              {
                file: "test6.csv",
                text: "MvfONHGpFjkhcljtdN",
                number: "29523789124890379908867190832017",
                hex: "b6b806bdf56ac1eefccd4153bd7c19cf",
              },
              {
                file: "test6.csv",
                text: "iYfe",
                number: "942571",
                hex: "ef6a04d2b5c9d753c9d33719fcbaca25",
              },
              {
                file: "test6.csv",
                text: "azQrlVVCJHwxBbNrllShTjgOIHTzP",
                number: "1751438",
                hex: "9447fc4bf98be72b73c0acdf3fd755f1",
              },
              {
                file: "test6.csv",
                text: "RioTvLjPNgrnBogoZJOrMdKWGog",
                number: "3309",
                hex: "6a1948c3645288377be04998012195bc",
              },
              {
                file: "test6.csv",
                text: "rntMJ",
                number: "62985826",
                hex: "ff8ddb5ea003924643ffe991a581dcde",
              },
            ],
          },
        ],
        isLoadingTableData: false,
      }}
    >
      <Table />
    </WrapperReduxTest>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Test empty Table component", () => {
  const component = renderer.create(
    <WrapperReduxTest
      initialState={{
        isLoadingTableData: false,
      }}
    >
      <Table />
    </WrapperReduxTest>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Test first render of Table component", () => {
  const component = renderer.create(
    <WrapperReduxTest>
      <Table />
    </WrapperReduxTest>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
