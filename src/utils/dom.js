export const appendChildByIndex = (self, child, index) => {
  if (!index) {
    index = 0;
  }
  if (index >= self.children.length) {
    self.appendChild(child);
  } else {
    self.insertBefore(child, self.children[index]);
  }
};

export const appendChildAndReturnParent = (createSelfFunc, child) => {
  const self = createSelfFunc();
  self.appendChild(child);
  return self;
};

const domAPI = {
  appendChildByIndex,
  appendChildAndReturnParent
};

export default domAPI;
