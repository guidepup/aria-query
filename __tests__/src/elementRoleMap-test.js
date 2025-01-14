import expect from 'expect';
import elementRoleMap from '../../src/elementRoleMap';

const entriesList = [
  [{"name": "article"}, ["article"]],
  [{"constraints": ["scoped to the body element"], "name": "header"}, ["banner"]],
  [{"name": "blockquote"}, ["blockquote"]],
  [{"attributes": [{"name": "type", "value": "button"}], "name": "input"}, ["button"]],
  [{"attributes": [{"name": "type", "value": "image"}], "name": "input"}, ["button"]],
  [{"attributes": [{"name": "type", "value": "reset"}], "name": "input"}, ["button"]],
  [{"attributes": [{"name": "type", "value": "submit"}], "name": "input"}, ["button"]],
  [{"name": "button"}, ["button"]],
  [{"name": "caption"}, ["caption"]],
  [{"constraints": ["ancestor table element has table role"], "name": "td"}, ["cell"]],
  [{"attributes": [{"name": "type", "value": "checkbox"}], "name": "input"}, ["checkbox"]],
  [{"name": "code"}, ["code"]],
  [{"name": "th"}, ["columnheader"]],
  [{"attributes": [{"name": "scope", "value": "col"}], "name": "th"}, ["columnheader"]],
  [{"attributes": [{"name": "scope", "value": "colgroup"}], "name": "th"}, ["columnheader"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "email"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "tel"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "text"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "aria-controls"}, {"name": "list"}, {"name": "type", "value": "url"}], "constraints": ["the aria-controls attribute is set to the same value as the list attribute"], "name": "input"}, ["combobox"]],
  [{"attributes": [{"name": "multiple"}, {"name": "size"}], "constraints": ["the multiple attribute and the size attribute do not have a value greater than 1"], "name": "select"}, ["combobox"]],
  [{"name": "aside"}, ["complementary"]],
  [{"attributes": [{"name": "aria-label"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, ["complementary"]],
  [{"attributes": [{"name": "aria-labelledby"}], "constraints": ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "aside"}, ["complementary"]],
  [{"constraints": ["scoped to the body element"], "name": "footer"}, ["contentinfo"]],
  [{"name": "dd"}, ["definition"]],
  [{"name": "del"}, ["deletion"]],
  [{"name": "dialog"}, ["dialog"]],
  [{"name": "em"}, ["emphasis"]],
  [{"name": "html"}, ["document"]],
  [{"name": "figure"}, ["figure"]],
  [{"attributes": [{"name": "aria-label"}], "name": "form"}, ["form"]],
  [{"attributes": [{"name": "aria-labelledby"}], "name": "form"}, ["form"]],
  [{"attributes": [{"name": "name"}], "name": "form"}, ["form"]],
  [{"name": "a"}, ["generic"]],
  [{"name": "area"}, ["generic"]],
  [{"name": "aside"}, ["generic"]],
  [{"name": "b"}, ["generic"]],
  [{"name": "bdo"}, ["generic"]],
  [{"name": "body"}, ["generic"]],
  [{"name": "data"}, ["generic"]],
  [{"name": "div"}, ["generic"]],
  [{"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "footer"}, ["generic"]],
  [{"constraints": ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"], "name": "header"}, ["generic"]],
  [{"name": "hgroup"}, ["generic"]],
  [{"name": "i"}, ["generic"]],
  [{"name": "pre"}, ["generic"]],
  [{"name": "q"}, ["generic"]],
  [{"name": "samp"}, ["generic"]],
  [{"name": "section"}, ["generic"]],
  [{"name": "small"}, ["generic"]],
  [{"name": "span"}, ["generic"]],
  [{"name": "u"}, ["generic"]],
  [{"constraints": ["ancestor table element has grid role"], "name": "td"}, ["gridcell"]],
  [{"name": "details"}, ["group"]],
  [{"name": "fieldset"}, ["group"]],
  [{"name": "optgroup"}, ["group"]],
  [{"name": "address"}, ["group"]],
  [{"name": "h1"}, ["heading"]],
  [{"name": "h2"}, ["heading"]],
  [{"name": "h3"}, ["heading"]],
  [{"name": "h4"}, ["heading"]],
  [{"name": "h5"}, ["heading"]],
  [{"name": "h6"}, ["heading"]],
  [{"name": "img"}, ["img"]],
  [{"name": "ins"}, ["insertion"]],
  [{"attributes": [{"name": "href"}], "name": "a"}, ["link"]],
  [{"attributes": [{"name": "href"}], "name": "area"}, ["link"]],
  [{"name": "menu"}, ["list"]],
  [{"name": "ol"}, ["list"]],
  [{"name": "ul"}, ["list"]],
  [{"attributes": [{"name": "size"}, {"name": "multiple"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, ["listbox"]],
  [{"attributes": [{"name": "size"}], "constraints": ["the size attribute value is greater than 1"], "name": "select"}, ["listbox"]],
  [{"attributes": [{"name": "multiple"}], "constraints": ["the multiple attribute value is greater than 1"], "name": "select"}, ["listbox"]],
  [{"attributes": [{"name": "aria-multiselectable", "value": "true"}], "constraints": ["the datalist selection model allows multiple option elements to be selected at a time"], "name": "datalist"}, ["listbox"]],
  [{"attributes": [{"name": "aria-multiselectable", "value": "false"}], "name": "datalist"}, ["listbox"]],
  [{"constraints": ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"], "name": "li"}, ["listitem"]],
  [{"name": "main"}, ["main"]],
  [{"name": "mark"}, ["mark"]],
  [{"name": "math"}, ["math"]],
  [{"name": "meter"}, ["meter"]],
  [{"name": "nav"}, ["navigation"]],
  [{"name": "option"}, ["option"]],
  [{"name": "p"}, ["paragraph"]],
  [{"attributes": [{"name": "alt", "value": ""}], "name": "img"}, ["presentation"]],
  [{"name": "progress"}, ["progressbar"]],
  [{"attributes": [{"name": "aria-valuemax"}, {"name": "aria-valuemin", "value": 0}, {"name": "aria-valuenow"}], "constraints": ["the progress bar is determinate"],"name": "progress"}, ["progressbar"]],
  [{"attributes": [{"name": "type", "value": "radio"}], "name": "input"}, ["radio"]],
  [{"attributes": [{"name": "aria-label"}], "name": "section"}, ["region"]],
  [{"attributes": [{"name": "aria-labelledby"}], "name": "section"}, ["region"]],
  [{"name": "tr"}, ["row"]],
  [{"name": "tbody"}, ["rowgroup"]],
  [{"constraints": ["ancestor table element has table role"], "name": "td"}, ["cell"]],
  [{"name": "tfoot"}, ["rowgroup"]],
  [{"name": "thead"}, ["rowgroup"]],
  [{"attributes": [{"name": "scope", "value": "row"}], "name": "th"}, ["rowheader"]],
  [{"attributes": [{"name": "scope", "value": "rowgroup"}], "name": "th"}, ["rowheader"]],
  [{"attributes": [{"name": "list"}, {"name": "type", "value": "search"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["searchbox"]],
  [{"attributes": [{"name": "aria-label"}], "name": "section"}, ["section"]],
  [{"attributes": [{"name": "aria-labelledby"}], "name": "section"}, ["section"]],
  [{"name": "hr"}, ["separator"]],
  [{"attributes": [{"name": "type", "value": "range"}], "name": "input"}, ["slider"]],
  [{"attributes": [{"name": "type", "value": "number"}], "name": "input"}, ["spinbutton"]],
  [{"name": "output"}, ["status"]],
  [{"name": "strong"}, ["strong"]],
  [{"name": "sub"}, ["subscript"]],
  [{"name": "sup"}, ["superscript"]],
  [{"attributes": [{"name": "aria-checked"}], "name": "button"}, ["switch"]],
  [{"name": "table"}, ["table"]],
  [{"name": "dfn"}, ["term"]],
  [{"name": "dt"}, ["term"]],
  [{"constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "email"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "tel"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "text"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"attributes": [{"name": "type", "value": "url"}], "constraints": ["the list attribute is not set"], "name": "input"}, ["textbox"]],
  [{"name": "textarea"}, ["textbox"]],
  [{"name": "time"}, ["time"]],
];

describe('elementRoleMap API', function () {
  describe('entries()', function () {
    test.each(elementRoleMap.entries())('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
    test.each([...elementRoleMap.entries()])('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
  });
  describe('forEach()', function () {
    const output = [];
    let context;
    elementRoleMap.forEach((value, key, map) => {
      output.push([key, value]);
      if (!context) {
        context = map;
      }
    });
    test.each(output)('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
    test.each(context)('Testing element: %o', (obj, roles) => {
      expect(entriesList).toEqual(
        expect.arrayContaining([[obj, roles]]),
      );
    });
  });
  it('get()', function () {
    expect(elementRoleMap.get({
      attributes: [
        { name: 'href' }
      ],
      name: 'a'
    })).toEqual(
      expect.arrayContaining(["link"]),
    );
    expect(elementRoleMap.get({
      "attributes": [
        {
          "name": "type",
          "value": "radio"
        }
      ], "name": "input"
    })).toEqual(
      expect.arrayContaining(["radio"]),
    );
    expect(elementRoleMap.get({
      attributes: {
        name: 'fake attribute',
      },
      name: 'fake element',
    })).toBeUndefined();
  });
  it('has()', function () {
    expect(elementRoleMap.has({
      attributes: [
        { name: 'href' }
      ],
      name: 'a'
    })).toEqual(true);
    expect(elementRoleMap.has({
      attributes: {
        name: 'fake attribute',
      },
      name: 'fake element',
    })).toEqual(false);
  });
  describe('keys()', function () {
    const entriesKeys = entriesList.map(entry => entry[0]);
    test.each(elementRoleMap.keys())('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
    test.each([...elementRoleMap.keys()])('Testing key: %o', (key) => {
      expect(entriesKeys).toEqual(
        expect.arrayContaining([key]),
      );
    });
  });
  describe('values()', function () {
    const entriesValues = entriesList.map(entry => entry[1]);
    test.each(elementRoleMap.values().map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
    test.each([...elementRoleMap.values()].map(value => [value]))('Testing value: %o', (value) => {
      expect(entriesValues).toEqual(
        expect.arrayContaining([value]),
      );
    });
  });
});

describe('elementRolesMap', function () {
  describe('iteration', function () {
    it('should have an iterator defined', function () {
      expect(elementRoleMap[Symbol.iterator]).not.toBeUndefined();
    });
    describe('spread operator', function () {
      it('should have a specific length', function () {
        expect([...elementRoleMap].length).toEqual(118);
      });
      test.each([...elementRoleMap])('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
    describe('for..of pattern', function () {
      const output = [];
      for (const [key, value] of elementRoleMap) {
        output.push([key, value]);
      }
      test.each(output)('Testing element: %o', (obj, roles) => {
        expect(entriesList).toEqual(
          expect.arrayContaining([[obj, roles]]),
        );
      });
    });
  });
});
