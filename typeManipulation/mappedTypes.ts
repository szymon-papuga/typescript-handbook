type OnlyBoolsAndNumbers = {
  [key:  string]: boolean | number;
};

const conforms: OnlyBoolsAndNumbers= {
    del: true,
    rodney: false
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
}

type Features = {
    darkMode: () => void
    newUserProfile: () => void
}

type FeatureOptions = OptionsFlags<Features>
