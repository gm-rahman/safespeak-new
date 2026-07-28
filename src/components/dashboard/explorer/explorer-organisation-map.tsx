"use client";

import { useEffect, useMemo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import type { OrganisationRecord } from "@/lib/organisation";

const AUSTRALIA_CENTER: [number, number] = [-25.2744, 133.7751];
const AUSTRALIA_DEFAULT_ZOOM = 4;

function pinIcon(isEmergency?: boolean): L.DivIcon {
  const color = isEmergency ? "#de3838" : "#0f5d9f";

  return L.divIcon({
    className: "explorer-map-pin",
    html: `<span style="display:block;width:16px;height:16px;border-radius:9999px;background:${color};border:2px solid #ffffff;box-shadow:0 1px 4px rgba(15,23,42,0.4);"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8],
  });
}

function FitToMarkers({ positions }: { positions: [number, number][] }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) {
      return;
    }

    if (positions.length === 1) {
      map.setView(positions[0], 10);
      return;
    }

    map.fitBounds(L.latLngBounds(positions), { padding: [32, 32] });
  }, [map, positions]);

  return null;
}

export function ExplorerOrganisationMap({
  organisations,
  onOpenDetails,
}: {
  organisations: OrganisationRecord[];
  onOpenDetails: (organisation: OrganisationRecord, triggerElement: HTMLElement | null) => void;
}) {
  const mappableOrganisations = useMemo(
    () => organisations.filter((organisation) => Boolean(organisation.coordinates)),
    [organisations]
  );
  const positions = useMemo<[number, number][]>(
    () =>
      mappableOrganisations.map((organisation) => [
        organisation.coordinates!.lat,
        organisation.coordinates!.lng,
      ]),
    [mappableOrganisations]
  );
  const unmappableCount = organisations.length - mappableOrganisations.length;

  if (organisations.length === 0) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-[18px] border border-dashed border-[#d8e2ee] bg-[#fbfdff] text-[12px] text-[#60728a]">
        No organisations match these filters yet.
      </div>
    );
  }

  if (mappableOrganisations.length === 0) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-1 rounded-[18px] border border-dashed border-[#d8e2ee] bg-[#fbfdff] px-4 text-center text-[12px] text-[#60728a]">
        <p>None of these {organisations.length} organisations have map location data yet.</p>
        <p className="text-[10px] text-[#98a6b9]">Switch to List view to see full results.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="h-[420px] w-full overflow-hidden rounded-[18px] border border-[#dce6f2]">
        <MapContainer
          center={AUSTRALIA_CENTER}
          zoom={AUSTRALIA_DEFAULT_ZOOM}
          scrollWheelZoom
          style={{ height: "100%", width: "100%" }}
          aria-label="Map of matching support organisations"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitToMarkers positions={positions} />
          {mappableOrganisations.map((organisation) => (
            <Marker
              key={organisation.id}
              position={[organisation.coordinates!.lat, organisation.coordinates!.lng]}
              icon={pinIcon(organisation.isEmergency)}
            >
              <Popup>
                <div className="min-w-[160px]">
                  <p className="text-[12px] font-bold text-[#1f2a3a]">{organisation.name}</p>
                  <p className="mt-0.5 text-[10px] text-[#60728a]">
                    {organisation.coverage ??
                      (organisation.jurisdiction === "national" ? "National" : organisation.jurisdiction)}
                  </p>
                  <button
                    type="button"
                    onClick={(event) => onOpenDetails(organisation, event.currentTarget)}
                    className="mt-2 text-[11px] font-bold text-[#0f5d9f] underline-offset-2 hover:underline"
                  >
                    View details
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      {unmappableCount > 0 ? (
        <p className="mt-2 text-[10px] text-[#98a6b9]">
          {unmappableCount} organisation{unmappableCount === 1 ? "" : "s"} without location data{" "}
          {unmappableCount === 1 ? "isn't" : "aren't"} shown on the map. Switch to List view to see
          every result.
        </p>
      ) : null}
    </div>
  );
}
