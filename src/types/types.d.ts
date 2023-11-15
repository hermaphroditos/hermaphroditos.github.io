type SelectedPageState = {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};

type PageState = {
  page: string;
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
};