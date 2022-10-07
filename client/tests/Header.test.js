import renderer from "react-test-renderer";
import { Header } from "../src/components";
import WrapperReduxTest from "./utils/WrapperReduxTest";

it("Test Header component", () => {
  const component = renderer.create(
    <WrapperReduxTest
      initialState={{
        fileList: {
          files: [
            "test1.csv",
            "test2.csv",
            "test3.csv",
            "test4.csv",
            "test5.csv",
            "test6.csv",
            "test9.csv",
          ],
        },
        isLoadingFileList: false,
      }}
    >
      <Header />
    </WrapperReduxTest>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Test Empty Header component", () => {
  const component = renderer.create(
    <WrapperReduxTest>
      <Header />
    </WrapperReduxTest>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
