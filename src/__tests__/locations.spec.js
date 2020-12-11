import locations, { Locations } from "../js/store/locations";
import { formatDate } from "../js/helpers/date";
import api, { API } from "../js/services/apiService";
jest.mock('../js/views/favTickets');

describe('Locations store tests', () => {
  it('Check that location is instance of Locations class', () => {
    expect(locations).toBeInstanceOf(Locations);
  });
  it('Success Locations instance create', () => {
    const instance = new Locations(api,{ formatDate });
    expect(instance.countries).toBe(null);
    expect(instance.shortCitiesList).toEqual({});
    expect(instance.formatDate).toEqual(formatDate);
  });
});